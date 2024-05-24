
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {
    label: string;
    disabled: boolean;
}

const AppCheckbox: React.FC<Props> = React.memo(({ name, control, label, disabled }) => {
    const { field } = useController({ name, control, defaultValue: false });

    return (
        <FormControlLabel
            control={
                <Checkbox
                    {...field}
                    color='secondary'
                    checked={field.value}
                    disabled={disabled}
                />
            }
            label={label}
        />
    );
});

export default AppCheckbox;