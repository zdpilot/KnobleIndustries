// (function () {
//
//     angular.module('SaaSApp')
//         .component('homePage', {
//             templateUrl: "/Components/CompHTML/homePage.html",
//             controller: homeController
//         });
//
//     function homeController(todoService, $scope, toaster) {
//         var self = this;
//         console.log("Testing")
//        
//     }
//
// })();

(function () {

    angular.module('myApp')
        .component('tasksComponent', {
            templateUrl: "../Components/homePage.html",
            controller: tasksController,
            bindings: {
                selectedList: '='
            }
        });

    function tasksController(todoService, $scope) {
        var self = this;
        self.todos = todoService.data.todo;
        self.addTodo = addTodo;
        self.clearCompleted = todoService.clearCompleted;
        self.searchEnter = todoService.searchEnter;
        self.isVisible = false;
        self.taskIsVisible = true;
        self.deleteTask = deleteTask;
        self.list = todoService.list;
        self.selectedCounter = todoService.selectList;
        self.deleteMyTask = deleteMyTask;

        // var index = todos.indexOf();

        $scope.$on('listAdded', function() {
            self.list = todoService.list;
            // console.log(self.list[0].todos.todoTitle);
        });
        $scope.$on('listSelected', function() {
            self.selectedCounter = todoService.selectList;
            // console.log(self.list[0].todos.todoTitle);
        });

        //   self.listTitle = self.list[self.selectedCounter].todos.todoTitle;


        function deleteTask(todo) {
            self.isVisible = self.isVisible ? false : true;

        }
        function deleteMyTask(todo) {

            self.selectedList.todos.splice(self.selectedList.todos.indexOf(todo), 1);
            console.log(todo)
        }

        self.toggleDone = function (todo) {
            todo.done = !todo.done;
        };

        function addTodo(list, todo) {
            todoService.addTodo(list, todo);
            self.todo = '';
        }

        this.removeSelectedList = function() {
            self.selectedList = false;
        }

    }

})();