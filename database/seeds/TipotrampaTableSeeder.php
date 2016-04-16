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
      TipoTrampa::create(['name' => 'tipoa',
                          'description' => 'tipoa']);
    }
}
