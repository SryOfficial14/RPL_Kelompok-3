<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1><?= htmlspecialchars($data['title']); ?></h1>
        </div>
      </div>
    </div>
  </section>

  <section class="content">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Form Ubah Supplier</h3>
      </div>
      
      <form action="<?= base_url; ?>/supplier/updateSupplier" method="POST">
        <input type="hidden" name="id_supplier" value="<?= $data['supplier']['id_supplier']; ?>">

        <div class="card-body">
          <div class="form-group">
            <label for="nama_supplier">Nama Supplier</label>
            <input type="text" class="form-control" id="nama_supplier" name="nama_supplier" value="<?= htmlspecialchars($data['supplier']['nama_supplier']); ?>" required autocomplete="off">
          </div>

          <div class="form-group">
            <label for="alamat">Alamat</label>
            <textarea class="form-control" id="alamat" name="alamat" rows="3" required><?= htmlspecialchars($data['supplier']['alamat']); ?></textarea>
          </div>

          <div class="form-group">
            <label for="hp">No. Telepon / HP</label>
            <input type="text" class="form-control" id="hp" name="hp" value="<?= htmlspecialchars($data['supplier']['hp'] ?? ''); ?>" required autocomplete="off">
          </div>

          <div class="form-group">
            <label for="email">Email Supplier</label>
            <input type="email" class="form-control" id="email" name="email" value="<?= htmlspecialchars($data['supplier']['email'] ?? ''); ?>" autocomplete="off">
          </div>
        </div>

        <div class="card-footer clearfix">
          <button type="submit" class="btn btn-primary">Update Supplier</button>
          <a href="<?= base_url; ?>/supplier" class="btn btn-secondary float-right">Batal</a>
        </div>
      </form>
    </div>
  </section>
</div>