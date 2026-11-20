<?php

class App {

    protected $controller = 'Home';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $url = $this->parseURL();

        // 1. Cek apakah ada URL index ke-0 (Controller)
        if (isset($url[0])) {
            // Ubah huruf pertama menjadi KAPITAL (contoh: 'user' -> 'User')
            $controllerName = ucfirst($url[0]);

            if (file_exists('../app/controllers/' . $controllerName . '.php')) {
                $this->controller = $controllerName;
                unset($url[0]);
            }
        }

        // 2. Require file controller
        require_once '../app/controllers/' . $this->controller . '.php';
        
        // 3. Instansiasi Class Controller
        $this->controller = new $this->controller;

        // 4. Cek Method (URL index ke-1)
        if (isset($url[1])) {
            if (method_exists($this->controller, $url[1])) {
                $this->method = $url[1];
                unset($url[1]);
            }
        }

        // 5. Kelola Parameter
        if (!empty($url)) {
            $this->params = array_values($url);
        }

        // 6. Jalankan Controller & Method serta kirimkan Params
        call_user_func_array([$this->controller, $this->method], $this->params);
    }

    public function parseURL() {
        if (isset($_GET['url'])) {
            $url = rtrim($_GET['url'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode('/', $url);
            return $url;
        }
        return [];
    }
}