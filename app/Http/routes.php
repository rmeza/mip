<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function () {
    return view('index');
});
Route::group(['prefix' => 'api'], function()
{

    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user','AuthenticateController@getAuthenticatedUser');
    Route::get('configuraciontrampa/{id}','ConfiguraciontrampaController@index');
    Route::post('configuraciontrampa','ConfiguraciontrampaController@store');
    Route::delete('configuraciontrampa/{id}','ConfiguraciontrampaController@destroy');
    Route::get('tipotrampa','TipotrampaController@index');
    Route::get('clasificaciontrampa','ClasificaciontrampaController@index');
    Route::get('ubicaciontrampa','UbicaciontrampaController@index');
    Route::get('planta','PlantaController@index');
    Route::get('evento/{id}','EventoController@index');
    Route::get('showDetalleEvento/{id}','EventoController@showDetail');
    Route::get('showConfiguracion/{id}','EventoController@showConfiguraciones');
    Route::get('showConfiguracionIds/{idplanta}', 'EventoController@showconfiguracionesIDs');

    Route::get('showPlagas', 'PlagaController@showplagas');
    Route::get('showweekly/filter','ChartController@weeklyGraph');
    Route::post('evento','EventoController@store');
    Route::post('detalleEvento','DetalleEventoController@store');


});
