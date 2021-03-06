<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('demo', function () {
    return view('pages.app');
});
Route::get('hello', function () {
    return view('layouts.hello');
});
Route::get('condition', function () {
    return view('pages.condition');
});
Route::get('list', function () {
    return view('pages.listRedering');
});

