<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\NewNotification;

class HomeController extends Controller
{
    //

    public function index()
    {
        return view('welcome');
    }

    public function notify(){
        return view('notify');

    }
    public function notifySend(Request $request ){
        event(new NewNotification($request->input('message')));
    }
}
