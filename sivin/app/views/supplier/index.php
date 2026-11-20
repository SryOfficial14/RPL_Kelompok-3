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
    <div class="row">
      <div class="col-sm-12">
        <?php Flasher::Message(); ?>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title"><?= htmlspecialchars($data['title']); ?></h3>
        <a href="<?= base_url; ?>/supplier/tambah" class="btn btn-primary float-right">Tambah Supplier</a>
      </div>

      <div class="card-body">
        <form action="<?= base_url; ?>/supplier/cari" method="post">
          <div class="row mb-3">
            <div class="col-lg-6">
              <div class="input-group">
                <input type="text" class="form-control" name="key" placeholder="Cari Nama Supplier..." autocomplete="off">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">Cari Data</button>
                  <a class="btn btn-outline-danger" href="<?= base_url; ?>/supplier">Reset</a>
                </div>
              </div>
            </div>
          </div>
        </form>

        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th style="width: 10px">No</th>
              <th>Nama Supplier</th>
              <th>Alamat</th>
              <th>No. Telepon / HP</th>
              <th>Email</th>
              <th style="width: 120px">Action</th>
            </tr>
          </thead>
          <tbody>
            <?php if (!empty($data['supplier'])): ?>
              <?php $no = 1; foreach ($data['supplier'] as $s) : ?>
              <tr>
                <td><?= $no++; ?></td>
                <td><?= htmlspecialchars($s['nama_supplier']); ?></td>
                <td><?= htmlspecialchars($s['alamat']); ?></td>
                <td><?= htmlspecialchars($s['hp']); ?></td>
                <td><?= htmlspecialchars($s['email']); ?></td>
                <td>
                  <a href="<?= base_url; ?>/supplier/edit/<?= $s['id_supplier']; ?>" class="badge badge-info">Edit</a>
                  <a href="<?= base_url; ?>/supplier/hapus/<?= $s['id_supplier']; ?>" class="badge badge-danger" onclick="return confirm('Yakin ingin menghapus data ini?');">Hapus</a>
                </td>
              </tr>
              <?php endforeach; ?>
            <?php else: ?>
              <tr>
                <td colspan="6" class="text-center">Belum ada data supplier.</td>
              </tr>
            <?php endif; ?>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>