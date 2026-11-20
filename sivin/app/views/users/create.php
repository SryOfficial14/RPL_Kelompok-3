<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1><?= isset($data['title']) ? $data['title'] : 'Tambah User'; ?></h1>
        </div>
      </div>
    </div>
  </section>

  <section class="content">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Form Tambah User</h3>
      </div>
      
      <form action="<?= base_url; ?>/user/simpanUser" method="POST">
        <div class="card-body">
          <div class="form-group">
            <label for="nama_lengkap">Nama Lengkap</label>
            <input type="text" class="form-control" id="nama_lengkap" name="nama_lengkap" placeholder="Masukkan nama lengkap" required autocomplete="off">
          </div>

          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Masukkan username" required autocomplete="off">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" class="form-control" id="password" name="password" placeholder="Masukkan password (teks biasa)" required autocomplete="off">
          </div>

          <div class="form-group">
            <label for="role">Role / Hak Akses</label>
            <select class="form-control" id="role" name="role" required>
              <option value="">-- Pilih Role --</option>
              <option value="admin">Admin</option>
              <option value="petugas">Petugas</option>
              <option value="peminjam">Peminjam</option>
            </select>
          </div>

          <div class="form-group">
            <label for="is_active">Status Aktif</label>
            <select class="form-control" id="is_active" name="is_active" required>
              <option value="1">Aktif</option>
              <option value="0">Non-Aktif</option>
            </select>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-primary">Simpan User</button>
          <a href="<?= base_url; ?>/user" class="btn btn-secondary">Batal</a>
        </div>
      </form>
    </div>
  </section>
</div>