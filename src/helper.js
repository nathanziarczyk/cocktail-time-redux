import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
export const Ingrediënts = (item) => (
  <>
    {item.strIngredient1 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient1}</TableCell>
        <TableCell>{item.strMeasure1}</TableCell>
      </TableRow>
    )}
    {item.strIngredient2 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient2}</TableCell>
        <TableCell>{item.strMeasure2}</TableCell>
      </TableRow>
    )}
    {item.strIngredient3 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient3}</TableCell>
        <TableCell>{item.strMeasure3}</TableCell>
      </TableRow>
    )}
    {item.strIngredient4 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient4}</TableCell>
        <TableCell>{item.strMeasure4}</TableCell>
      </TableRow>
    )}
    {item.strIngredient5 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient5}</TableCell>
        <TableCell>{item.strMeasure5}</TableCell>
      </TableRow>
    )}
    {item.strIngredient6 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient6}</TableCell>
        <TableCell>{item.strMeasure6}</TableCell>
      </TableRow>
    )}
    {item.strIngredient7 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient7}</TableCell>
        <TableCell>{item.strMeasure7}</TableCell>
      </TableRow>
    )}
    {item.strIngredient8 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient8}</TableCell>
        <TableCell>{item.strMeasure8}</TableCell>
      </TableRow>
    )}
    {item.strIngredient9 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient9}</TableCell>
        <TableCell>{item.strMeasure9}</TableCell>
      </TableRow>
    )}
    {item.strIngredient10 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient10}</TableCell>
        <TableCell>{item.strMeasure10}</TableCell>
      </TableRow>
    )}
    {item.strIngredient11 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient11}</TableCell>
        <TableCell>{item.strMeasure11}</TableCell>
      </TableRow>
    )}
    {item.strIngredient12 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient12}</TableCell>
        <TableCell>{item.strMeasure12}</TableCell>
      </TableRow>
    )}
    {item.strIngredient13 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient13}</TableCell>
        <TableCell>{item.strMeasure13}</TableCell>
      </TableRow>
    )}
    {item.strIngredient14 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient14}</TableCell>
        <TableCell>{item.strMeasure14}</TableCell>
      </TableRow>
    )}
    {item.strIngredient15 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient15}</TableCell>
        <TableCell>{item.strMeasure15}</TableCell>
      </TableRow>
    )}
  </>
);
