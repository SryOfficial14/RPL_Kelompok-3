<?php

class SupplierModel
{
    private $table = 'supplier'; // Sesuaikan dengan nama tabel di database Anda
    private $db;

    public function __construct()
    {
        $this->db = new Database;
    }

    public function getAllSupplier()
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' ORDER BY id_supplier DESC');
        return $this->db->resultSet();
    }

    public function getSupplierById($id)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id_supplier = :id');
        $this->db->bind('id', $id);
        return $this->db->single();
    }

  public function tambahSupplier($data)
    {
        $query = "INSERT INTO supplier (nama_supplier, alamat, hp, email) 
                  VALUES (:nama_supplier, :alamat, :hp, :email)";
        
        $this->db->query($query);
        $this->db->bind('nama_supplier', $data['nama_supplier'] ?? '');
        $this->db->bind('alamat', $data['alamat'] ?? '');
        $this->db->bind('hp', $data['hp'] ?? $data['telepon'] ?? '');
        $this->db->bind('email', $data['email'] ?? '');
        
        $this->db->execute();
        return $this->db->rowCount();
    }

    public function updateDataSupplier($data)
    {
        $query = "UPDATE supplier SET 
                    nama_supplier = :nama_supplier, 
                    alamat = :alamat, 
                    hp = :hp, 
                    email = :email 
                  WHERE id_supplier = :id";

        $this->db->query($query);
        $this->db->bind('id', $data['id_supplier']);
        $this->db->bind('nama_supplier', $data['nama_supplier'] ?? '');
        $this->db->bind('alamat', $data['alamat'] ?? '');
        $this->db->bind('hp', $data['hp'] ?? $data['telepon'] ?? $data['no_telepon'] ?? '');
        $this->db->bind('email', $data['email'] ?? '');

        $this->db->execute();
        return $this->db->rowCount();
    }
}