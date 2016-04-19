<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUbicacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('ubicaciones', function (Blueprint $table) {
         $table->increments('id');
         $table->string('name')->unique();
         $table->string('description')->nullable();
         $table->timestamps();
     });
   }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('ubicaciones');
    }
}
