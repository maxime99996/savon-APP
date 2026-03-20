/**
 * Structure simplifiée envoyée au serveur lors d'une sauvegarde (POST ou PUT).
 */
export interface RecetteFormDTO {
id?: number | null;
titre: string;
description: string;
surgraissage: number;
avecSoude: boolean;
concentrationAlcalin: number; // Rajouter un 'n' à la fin
ligneIngredients: LigneIngredientDTO[];
}


export interface LigneIngredientDTO {
  ingredientId: number;
  recetteId?: number | null;
  quantite: number;
  pourcentage: number;
}