<?php

use Illuminate\Database\Seeder;
use App\Clasificaciontrampa;

class ClasificaciontrampasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('clasificaciontrampas')->delete();
      $tipotrampas = array(
              ['name' => 'Interior', 'description' => 'Interior'],
              ['name' => 'Exterior', 'description' => 'Exterior'],
              ['name' => 'Voladores', 'description' => 'Voladores'],
      );

      foreach ($tipotrampas as $tipo)
      {
          Clasificaciontrampa::create($tipo);
      }
    }
}
