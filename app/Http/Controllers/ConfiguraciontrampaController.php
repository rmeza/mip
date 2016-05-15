<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Configuraciontrampa;
use DB;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ConfiguraciontrampaController extends Controller
{
  public function __construct()
  {
      // Apply the jwt.auth middleware to all methods in this controller
      $this->middleware('jwt.auth');
  }

  public function index()
  {
      // Retrieve all  in the database and return them
      //$trampas = Configuraciontrampa::all();
      $trampas = DB::table('configuraciontrampas')
          ->join('plantas', 'plantas.id', '=', 'configuraciontrampas.idplanta')
          ->join('tipotrampas', 'tipotrampas.id', '=', 'configuraciontrampas.idtipotrampa')
          ->join('clasificaciontrampas', 'clasificaciontrampas.id', '=', 'configuraciontrampas.idclasificaiontrampa')
          ->join('ubicaciones', 'ubicaciones.id', '=', 'configuraciontrampas.idubicacion')
          ->select('configuraciontrampas.numerotrampa', 'plantas.name',
                   'tipotrampas.name as tiponame','clasificaciontrampas.name as clasificacionname',
                   'ubicaciones.name as ubicacionname')
          ->get();

      return $trampas;
  }

  public function store(Request $request) {
    $trampa = new Configuraciontrampa;

    $trampa->numerotrampa = $request->input('numerotrampa');
    $trampa->description = 'desc';
    $trampa->createdby = 'Yo';
    $trampa->modifiedby = 'yoo';
    $trampa->idplanta = $request->input('idplanta');
    $trampa->idubicacion = 1;
    $trampa->idtipotrampa = 1;
    $trampa->idclasificaiontrampa = 1;

    $trampa->save();
    return $trampa->numerotrampa;

  }

}
