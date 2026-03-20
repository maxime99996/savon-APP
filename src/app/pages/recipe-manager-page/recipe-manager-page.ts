import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/recette.model';
import { RecetteService } from '../../services/recette.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-manager-page',
  imports: [CommonModule],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css',
})
export class RecipeManagerPage implements OnInit {
  public recettes: Recette[] = []
  constructor(private recetteService: RecetteService) { }
  ngOnInit(): void {
    this.chargerRecettes();
  }
  chargerRecettes(): void {
    this.recetteService.getRecettes().subscribe({
      next: (data) => this.recettes = data,
      error: (err) => console.error("Erreur API", err)
    })
  }
  supprimerRecette(id: number): void {
    if (confirm("Supprimer cette recette ?")) {
      this.recetteService.deleteRecette(id).subscribe(() =>
        this.chargerRecettes());
    }
  }
}