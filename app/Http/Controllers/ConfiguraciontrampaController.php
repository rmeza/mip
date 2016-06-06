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
          ->select('configuraciontrampas.id','configuraciontrampas.numerotrampa', 'plantas.name',
                   'tipotrampas.name as tiponame','clasificaciontrampas.name as clasificacionname',
                   'ubicaciones.name as ubicacionname')
          ->get();

      return $trampas;
  }

  /**
  * Store a nuew configuration trampa.
  * @param  Request  $request
  * @return Response
  */
  public function store(Request $request) {
  $trampa = new Configuraciontrampa;


  $trampa->numerotrampa = $request->input('numerotrampa');
  $trampa->description = $request->input('descripcion');
  $trampa->createdby = $request->input('createdby');
  $trampa->modifiedby = $request->input('modifiedby');
  $trampa->idplanta = $request->input('idplanta');
  $trampa->idubicacion = $request->input('ubicacion');
  $trampa->idtipotrampa = $request->input('tipotrampa');
  $trampa->idclasificaiontrampa = $request->input('clasificiontrampa');

  $trampa->save();
  return $trampa->numerotrampa;
  }

  /**
  * Delete the configuration trampa.
  * @param  id
  * @return Response
  */
  public function destroy($id) {

    $trampa =  Configuraciontrampa::find($id);
    $trampa->delete();
    return 'we\'re deleting trampa '.$id;
  }

}
