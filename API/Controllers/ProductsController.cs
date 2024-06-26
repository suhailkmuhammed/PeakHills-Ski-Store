using System.Text.Json;
using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery] ProductParams productParams)
        {
            var query = _context.Products
            .Sort(productParams.orderBy)
            .Search(productParams.searchTerm)
            .Filter(productParams.brands, productParams.types)
            .AsQueryable();
            var products = await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

            Response.AddPaginationHeader(products.MetaData);
            return products;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();

            return product;
        }

        [HttpGet("type/{id}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsWithType(int id)
        {
            // Find the currently viewing product
            var currentProduct = await _context.Products.FindAsync(id);
            if (currentProduct == null) return NotFound();

            // Retrieve products of the same type excluding the currently viewing product
            var products = await _context.Products
                                         .Where(p => p.Type == currentProduct.Type && p.Id != id)
                                         .ToListAsync();
            if (!products.Any()) return NotFound();
            return products;
        }

        [HttpGet("featuredProducts")]
        public async Task<ActionResult<IEnumerable<Product>>> GetFeaturedProducts()
        {
            List<int> ids = new List<int>
            {
                8,4,14,12
            };
            var products = new List<Product>();
            foreach (int id in ids)
            {
                var product = await _context.Products
                                         .Where(p => p.Id == id)
                                         .FirstOrDefaultAsync();
                if (product != null)
                {
                    products.Add(product);
                }
            }
            if (products.Count == 0) return NotFound();
            return products;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            var brands = await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
            var types = await _context.Products.Select(p => p.Type).Distinct().ToListAsync();

            return Ok(new { brands, types });
        }
    }
}