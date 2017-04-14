var app = angular.module("todoapp",[]);

app.controller("TodoCtrl", function(){
  this.editMode = false;
  this.todos = [
    "Learn Angular 1",
    "Learn Angular 2",
    "Practice Java programming",
    "Angular 1 to Angular 2"

  ]
  this.addnewtodo = function(){
    this.todos.push(this.addtodo);
    this.addtodo = "";
  }
  this.triggerEditMode = function(){
    this.editMode = !this.editMode ;
  }
  this.delete = function(index){
    this.todos.splice(index,1);

  }

})
