import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Series {
  weight: number | null;
  reps: number | null;
  rest: number | null;
  notes: string;
  saved: boolean;
  editing: boolean;
}

interface Exercise {
  name: string;
  series: Series[];
}

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css'],
  standalone: true,
  imports: [SidebarComponent, FormsModule, CommonModule],
})
export class EntrenamientosComponent {
  exercises: Exercise[] = [
    { name: '', series: [] }
  ];
  newExerciseName: string = '';

  addExercise() {
    if (this.newExerciseName.trim()) {
      this.exercises.push({ name: this.newExerciseName, series: [] });
      this.newExerciseName = '';
    }
  }

  deleteExercise(exercise: Exercise) {
    this.exercises = this.exercises.filter(e => e !== exercise);
  }

  addSeries(exercise: Exercise) {
    const newSeries: Series = {
      weight: null,
      reps: null,
      rest: null,
      notes: '',
      saved: false,
      editing: true
    };
    exercise.series.push(newSeries);
  }

  saveSeries(series: Series) {
    series.saved = true;
    series.editing = false;
  }

  editSeries(series: Series) {
    series.editing = true;
  }

  deleteSeries(exercise: Exercise, series: Series) {
    exercise.series = exercise.series.filter(s => s !== series);
  }
}
