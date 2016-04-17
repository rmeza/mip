<?php

use Illuminate\Database\Seeder;
use App\Tipotrampa;

class TipotrampaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('tipotrampas')->delete();
      $tipotrampas = array(
              ['name' => 'Mecanica', 'description' => 'Mecanica'],
              ['name' => 'Voladores', 'description' => 'Voladores'],
              ['name' => 'Cebo', 'description' => 'Cebo'],
              ['name' => 'Goma', 'description' => 'Goma'],
      );

      foreach ($tipotrampas as $tipo)
      {
          TipoTrampa::create($tipo);
      }


    }
}
