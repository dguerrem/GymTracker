import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Exercise {
  name: string;
  sets: Set[];
}

interface Set {
  reps: number;
  weight: number;
}

interface Workout {
  date: Date;
  name: string;
  exercises: Exercise[];
}


@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ]
})
export class EntrenamientosComponent {
  // Variables para nuevos entrenamientos
  newWorkoutName: string = '';
  newWorkoutDate: string = '';
  
  workouts = [
    {
      date: '2024-10-01',
      name: 'Full Body Workout',
      exercises: [
        { name: 'Bench Press', sets: 4, reps: 12, weight: '70kg' },
        { name: 'Squat', sets: 4, reps: 12, weight: '80kg' }
      ]
    },
    {
      date: '2024-10-02',
      name: 'Leg Day',
      exercises: [
        { name: 'Deadlift', sets: 4, reps: 10, weight: '90kg' },
        { name: 'Lunges', sets: 3, reps: 15, weight: '20kg' }
      ]
    }
  ];

  displayedColumns: string[] = ['date', 'name', 'exercises', 'sets', 'actions'];

  constructor(private router: Router) { }

  addWorkout() {
    if (this.newWorkoutName && this.newWorkoutDate) {
      this.workouts.push({
        date: this.newWorkoutDate,
        name: this.newWorkoutName,
        exercises: [] // Puedes agregar un formulario para añadir ejercicios aquí
      });
      this.newWorkoutName = '';
      this.newWorkoutDate = '';
      // Navegar a la página de detalles del entrenamiento
      // this.router.navigate(['/detalleEntreamiento']); (ajusta la ruta si es necesario)
    }
  }
  
  viewWorkout(workout: Workout) {
    this.router.navigate(['/a/detalleEntreamiento'], { state: { workout } });
  }

  deleteWorkout(workout: Workout) {
    // this.workouts = this.workouts.filter(w => w !== workout);
  }

  getTotalSets(workout: Workout): number {
    return workout.exercises.reduce((total, exercise) => total + exercise.sets.length, 0);
  }
}
