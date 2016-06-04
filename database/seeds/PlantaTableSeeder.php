<?php

use Illuminate\Database\Seeder;
use App\Planta;

class PlantaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('plantas')->delete();
      $plantas = array(
              ['name' => 'DRY', 'description' => 'Planta DRY'],
              ['name' => 'WET', 'description' => 'Planta WET']

      );

      foreach ($plantas as $item)
      {
          Planta::create($item);
      }


    }
}
