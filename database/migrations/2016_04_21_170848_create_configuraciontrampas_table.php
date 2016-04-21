<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConfiguraciontrampasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
       Schema::create('configuraciontrampas', function ($table) {
         $table->increments('id');
         $table->string('numerotrampa');
         $table->string('description')->nullable();
         $table->string('createdby');
         $table->string('modifiedby');
         $table->timestamps();
         //foreign keys
         $table->integer('idplanta')->unsigned();
         $table->foreign('idplanta')->references('id')->on('plantas')->onDelete('cascade');
         $table->integer('idubicacion')->unsigned();
         $table->foreign('idubicacion')->references('id')->on('ubicaciones')->onDelete('cascade');
         $table->integer('idtipotrampa')->unsigned();
         $table->foreign('idtipotrampa')->references('id')->on('tipotrampas')->onDelete('cascade');
         $table->integer('idclasificaiontrampa')->unsigned();
         $table->foreign('idclasificaiontrampa')->references('id')->on('clasificaciontrampas')->onDelete('cascade');


       });
     }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
          Schema::drop('configuraciontrampas');
    }
}
