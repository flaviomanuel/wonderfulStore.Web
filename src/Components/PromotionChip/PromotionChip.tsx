import { Chip, Stack } from "@mui/material";
import { PromotionTypes } from "../../shared/types";

interface IPromotionChip {
    promotionType: PromotionTypes
}
function PromotionChip({promotionType}  : IPromotionChip) {

    return (
        <Stack sx={{ width: '100%'}} spacing={1} alignItems="center">
                    
        <Stack  direction="row" spacing={1}>
                {promotionType === 1 ? (
                    <Chip label="Promoção Leve 2 Pague 1" color="warning" size="medium" variant="outlined" />
                ) : (promotionType === 2) ? 
                 ( <Chip   label="Promoção 3 por 10" color="primary" size="medium" variant="outlined" /> )
                 : null
                }
        </Stack>
        </Stack>
    )

}

export default PromotionChip;