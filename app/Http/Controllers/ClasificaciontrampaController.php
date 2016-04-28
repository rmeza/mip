<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Clasificaciontrampa;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ClasificaciontrampaController extends Controller
{
  public function __construct()
  {
      // Apply the jwt.auth middleware to all methods in this controller
      $this->middleware('jwt.auth');
  }

  public function index()
  {
      // Retrieve all  in the database and return them
      $clasificaciones = Clasificaciontrampa::all();
      return $clasificaciones;
  }

}
