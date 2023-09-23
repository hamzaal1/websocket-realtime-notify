<?php

namespace App\Http\Controllers;

use App\Events\NewNotification;

class HomeController extends Controller
{
    //

    public function index()
    {
        $notificationData = [
            'message'=>'Hello World First real Time Notification'
        ];
        event(new NewNotification($notificationData));
        return view('welcome');
    }
}
