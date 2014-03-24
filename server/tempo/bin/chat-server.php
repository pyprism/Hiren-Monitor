<?php
/**
 * Created by PhpStorm.
 * User: prism
 * Date: 3/24/14
 * Time: 8:35 AM
 */

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use MyApp\Chat;

    require dirname(__DIR__) . '/vendor/autoload.php';

    $server = IoServer::factory(
        new Chat(),
        8080
    );

    $server->run();