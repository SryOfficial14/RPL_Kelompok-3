<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Tambah Supplier</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="content">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Form Tambah Supplier</h3>
      </div>
      
      <form action="<?= base_url; ?>/supplier/simpanSupplier" method="POST">
        <div class="card-body">
          <div class="form-group">
            <label for="nama_supplier">Nama Supplier</label>
            <input type="text" class="form-control" id="nama_supplier" name="nama_supplier" placeholder="Masukkan nama supplier" required autocomplete="off">
          </div>

          <div class="form-group">
            <label for="alamat">Alamat</label>
            <textarea class="form-control" id="alamat" name="alamat" rows="3" placeholder="Masukkan alamat supplier" required></textarea>
          </div>

          <div class="form-group">
            <label for="telepon">No. Telepon</label>
            <input type="text" class="form-control" id="telepon" name="telepon" placeholder="Masukkan nomor telepon" required autocomplete="off">
          </div>
          
          <div class="form-group">
            <label for="email">Email Supplier</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Masukkan alamat email supplier" autocomplete="off" value="<?= isset($data['supplier']['email']) ? htmlspecialchars($data['supplier']['email']) : ''; ?>">
          </div>
        </div>

        

        <div class="card-footer">
          <button type="submit" class="btn btn-primary">Simpan Supplier</button>
          <a href="<?= base_url; ?>/supplier" class="btn btn-secondary">Batal</a>
        </div>
      </form>
    </div>
  </section>
</div>