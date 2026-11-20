<?php

class User extends Controller {

        // public function __construct() 
        // {  
        // if($_SESSION['session_login'] != 'sudah_login') { 
        // Flasher::setMessage('Login','Tidak ditemukan.','danger'); 
        // header('location: '. base_url . '/login'); 
        // exit; 
        //     } 
        // }

    public function index()
    {
        $data['title'] = 'Data User';
        $data['user']  = $this->model('UserModel')->getAllUser();

        $this->view('templates/header', $data);
        $this->view('templates/sidebar', $data);
        $this->view('users/index', $data);
        $this->view('templates/footer', $data);
    }

    public function cari()
    {
        $data['title'] = 'Data User';
        $data['user']  = $this->model('UserModel')->cariUsers();
        $data['key']   = $_POST['key'] ?? '';

        $this->view('templates/header', $data);
        $this->view('templates/sidebar', $data);
        $this->view('users/index', $data);
        $this->view('templates/footer', $data);
    }

    public function tambah()
    {
        $data['title'] = 'Tambah User';

        $this->view('templates/header', $data);
        $this->view('templates/sidebar', $data);
        $this->view('users/create', $data); // <-- Ubah dari 'users/tambah' menjadi 'users/create'
        $this->view('templates/footer', $data);
    }

    public function simpanUser()
    {
        if ($this->model('UserModel')->tambahUser($_POST) > 0) {
            Flasher::setMessage('Berhasil', 'ditambahkan', 'success');
        } else {
            Flasher::setMessage('Gagal', 'ditambahkan', 'danger');
        }
        header('Location: ' . base_url . '/user');
        exit;
    }

    public function edit($id)
    {
        $data['title'] = 'Edit User';
        $data['user']  = $this->model('UserModel')->getUserById($id);

        $this->view('templates/header', $data);
        $this->view('templates/sidebar', $data);
        $this->view('users/edit', $data);
        $this->view('templates/footer', $data);
    }

    public function updateUser()
    {
        // Memanggil fungsi updateDataUser dari UserModel
        if ($this->model('UserModel')->updateDataUser($_POST) >= 0) {
            Flasher::setMessage('Berhasil', 'diupdate', 'success');
        } else {
            Flasher::setMessage('Gagal', 'diupdate', 'danger');
        }
        header('Location: ' . base_url . '/user');
        exit;
    }

    public function hapus($id)
    {
        if ($this->model('UserModel')->deleteUser($id) > 0) {
            Flasher::setMessage('Berhasil', 'dihapus', 'success');
        } else {
            Flasher::setMessage('Gagal', 'dihapus', 'danger');
        }
        header('Location: ' . base_url . '/user');
        exit;
    }
}