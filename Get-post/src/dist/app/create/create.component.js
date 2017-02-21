"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var task_1 = require('../task');
var app_service_1 = require("../app.service");
//import error = webdriver.error;
//import error = webdriver.error;
var CreateComponent = (function () {
    function CreateComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.task = new task_1.Task();
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.index = +data.i;
            if (_this.index || _this.index === 0) {
                _this.task = _this.service.tasks[_this.index];
            }
        });
    };
    CreateComponent.prototype.submit = function () {
        if (this.index || (this.index === 0)) {
            this.service.update(this.task, this.index).subscribe(function (data1) {
                // alert(JSON.stringify(data1))
            }, function (e) {
                alert(e);
            });
            this.router.navigate(['show']);
        }
        else {
            this.service.add(this.task).subscribe(function (data1) {
                // alert(JSON.stringify(data1))
            }, function (e) {
                alert(e);
            }, function () {
                // alert("completed")
            });
            this.router.navigate(['show']);
        }
    };
    CreateComponent.prototype.goHome = function () {
        this.router.navigate(['home']);
    };
    CreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map