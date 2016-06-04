<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        DB::table('users')->delete();
        $users = array(
                ['name' => 'Martin Ramirez Falcon', 'email' => 'm_r_falcon@msn.com', 'password' => Hash::make('secret')],
                ['name' => 'Ricardo Meza', 'email' => 'ing.ricardomeza@gmail.com', 'password' => Hash::make('secret')],
                ['name' => 'Katy Enriquez', 'email' => 'johana.enriquez@agro-operadora.com', 'password' => Hash::make('secret')],
                ['name' => 'Francisco Jasso', 'email' => 'francisco.jasso@agro-operadora.com', 'password' => Hash::make('secret')],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::create($user);
        }
        //TipoTrampaTableSeeder
        $this->call(TipotrampaTableSeeder::class);
        $this->command->info('Tipo trampa table seeded!');
        //Clasificaion trampa
        $this->call(ClasificaciontrampasTableSeeder::class);
        $this->command->info('Clasificacion trampa table seeded!');
        //Plantas
        $this->call(PlantaTableSeeder::class);
        $this->command->info('plantas table seeded!');


        Model::reguard();
    }
}
