<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Middleware\Authenticate;
use App\Http\Middleware\RedirectIfAuthenticated;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware(RedirectIfAuthenticated::class)->group(function () {
	Route::get('login', [AuthController::class, 'index'])->name('login.main');
	Route::post('post-login', [AuthController::class, 'postLogin'])->name('login.post');
	Route::get('register', [AuthController::class, 'register']);
});

Route::middleware(Authenticate::class)->group(function () {
	Route::get('/', [DashboardController::class, 'index']);
});