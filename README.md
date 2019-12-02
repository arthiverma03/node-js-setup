<h3>Book Library Form</h3>
<div class="container">
  <form [formGroup]="bookForm" (ngSubmit)="onSubmit(bookForm)" novalidate>
    <label for="name">Book Name</label>
    <input type="text" formControlName="name" placeholder="Book name..">
    <label for="auther">Book Auther</label>
    <input type="text" formControlName="auther" placeholder="Book Auther name..">
    <label for="count">Book Count</label>
    <select formControlName="count">
      <option value="{{count}}" *ngFor="let count of maxBookCount; let i = index;">{{count}}</option>
    </select>
    
<h3>Book Library Form</h3>


<div class="container">
  <form [formGroup]="bookForm" (ngSubmit)="onSubmit(bookForm)" novalidate>
    <label for="name">Book Name</label>
    <input type="text" formControlName="name" placeholder="Book name..">


    <label for="auther">Book Auther</label>
    <input type="text" formControlName="auther" placeholder="Book Auther name..">


    <label for="count">Book Count</label>
    <select formControlName="count">
      <option value="{{count}}" *ngFor="let count of key; let i = index;">{{count}}</option>
    </select>
  <label for="counts">Book Count</label>
    <select formControlName="counts">
      <option value="{{counts}}" *ngFor="let counts of apikey; let i = index;">{{counts}}</option>
    </select>

    <label for="description">Book Description</label>
    <textarea formControlName="description" placeholder="Book description here.." style="height:100px"></textarea>


    <input type="submit" [disabled]="!bookForm.valid" value="Submit">
  </form>
</div>
    <label for="description">Book Description</label>
    <textarea formControlName="description" placeholder="Book description here.." style="height:100px"></textarea>


    <input type="submit" [disabled]="!bookForm.valid" value="Submit">
  </form>
</div>







