<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlagasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
       Schema::create('plagas', function ($table) {
         $table->increments('id');
         $table->string('name');
         $table->string('description')->nullable();    
         $table->timestamps();
         //foreign keys
        /* $table->integer('idclasificaciontrampa')->unsigned();
         $table->foreign('idclasificaciontrampa')->references('id')
         ->on('clasificaciontrampas')->onDelete('cascade');*/

       });
     }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
           Schema::drop('plagas');
    }
}
