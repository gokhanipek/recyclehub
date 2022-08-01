export const getPercentage = (recoveredQuantity?: number, unassignedQuantityTotal?: number): number => {
    
    if (recoveredQuantity <= 0 || recoveredQuantity === null || recoveredQuantity === undefined) return 0;

    const totalQuantity = recoveredQuantity + unassignedQuantityTotal;
    return Math.floor((100 * recoveredQuantity) / totalQuantity);
}