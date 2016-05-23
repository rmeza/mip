<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
       Schema::create('eventos', function ($table) {
         $table->increments('id');
         $table->string('semana');
         $table->date('fechaevento');
         $table->string('description')->nullable();
         $table->string('createdby');
         $table->string('modifiedby');
         $table->timestamps();
         //foreign keys
         $table->integer('idconfiguraciontrampa')->unsigned();
         $table->foreign('idconfiguraciontrampa')->references('id')
         ->on('configuraciontrampas')->onDelete('cascade');

       });
     }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
         Schema::drop('eventos');
    }
}
