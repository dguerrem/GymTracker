import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Set {
    // Define the properties of a set here
    id: number;
    // other properties...
}

interface Exercise {
    sets: Set[];
}

@Component({
    selector: 'app-detalle-entrenamiento',
    templateUrl: './detalle-entrenamiento.component.html',
    styleUrls: ['./detalle-entrenamiento.component.css'],
    standalone: true,
    imports: [MatIcon, MatFormField, MatLabel, FormsModule, CommonModule]
})
export class DetalleEntrenamientoComponent {
    workout: any = {
        name: 'Workout name',
        date: new Date(),
        exercises: []
    };

    newExerciseName: string = '';

    setColumns: string[] = ['set', 'reps', 'weight', 'rest', 'observations', 'actions'];

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/entrenamientos']);
    }

    addExercise() {
        if (this.newExerciseName) {
            this.workout.exercises.push({
                name: this.newExerciseName,
                sets: []
            });
            this.newExerciseName = '';
        }
    }

    addSet(exercise: any) {
        exercise.sets.push({
            reps: 0,
            weight: 0,
            rest: 0,
            observations: ''
        });
    }

    editSet(exercise: any, set: any) {
        // Implementar lógica para editar series
    }

    deleteSet(exercise: Exercise, set: Set): void {
        if (!exercise || !exercise.sets) {
            console.error("Invalid exercise object");
            return;
        }

        if (!set) {
            console.error("Invalid set object");
            return;
        }

        exercise.sets = exercise.sets.filter((s: Set) => s !== set);
    }
}
