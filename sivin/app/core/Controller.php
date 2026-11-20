<?php

class Controller {
    public function view($view, $data = [])
    {
        extract($data);
        if (file_exists('../app/views/' . $view . '.php')) {
            require_once '../app/views/' . $view . '.php';
        } else {
            die("View '$view' tidak ditemukan!");
        }
    }

    public function model($model)
    {
        require_once '../app/models/' . $model . '.php';
        return new $model;
    }
}