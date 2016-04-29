<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Planta;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class PlantaController extends Controller
{
  public function __construct()
  {
      // Apply the jwt.auth middleware to all methods in this controller
      $this->middleware('jwt.auth');
  }

  public function index()
  {
    $plantas = Planta::all();
    return $plantas;
  }
}
