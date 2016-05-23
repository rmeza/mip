<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleeventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
       Schema::create('detalleeventos', function ($table) {
         $table->increments('id');
         $table->string('quantity');
         $table->string('createdby');
         $table->string('modifiedby');
         $table->timestamps();
         //foreign keys
         $table->integer('idevento')->unsigned();
         $table->foreign('idevento')->references('id')
         ->on('eventos')->onDelete('cascade');

       });
     }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
         Schema::drop('detalleeventos');
    }
}
