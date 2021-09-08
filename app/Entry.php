<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
  //  protected $fillable = ['_token'];
  
  public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
