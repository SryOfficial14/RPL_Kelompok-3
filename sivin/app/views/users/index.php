<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1><?= $data['title']; ?></h1>
        </div>
      </div>
    </div>
  </section>

  <section class="content">
    <div class="row">
      <div class="col-sm-12"><?php Flasher::Message(); ?></div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title"><?= $data['title']; ?></h3>
        <a href="<?= base_url; ?>/user/tambah" class="btn float-right btn-xs btn-primary">Tambah User</a>
      </div>
      <div class="card-body">
        <form action="<?= base_url; ?>/user/cari" method="post">
          <div class="row mb-3">
            <div class="col-lg-6">
              <div class="input-group">
                <input type="text" class="form-control" name="key" placeholder="Cari nama lengkap...">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">Cari Data</button>
                  <a class="btn btn-outline-danger" href="<?= base_url; ?>/user">Reset</a>
                </div>
              </div>
            </div>
          </div>
        </form>

        <table class="table table-bordered">
          <!-- Di bagian thead, tambahkan th Status -->
<thead>
  <tr>
    <th style="width:10px">No</th>
    <th>Nama Lengkap</th>
    <th>UserName</th>
    <th>Password</th>
    <th>Role</th>
    <th>Status</th> <!-- Tambahan -->
    <th style="width:150px">Action</th>
  </tr>
</thead>

<!-- Di bagian tbody, tambahkan td untuk status -->
<tbody>
  <?php $no = 1; foreach ($data['user'] as $row): ?>
    <tr>
      <td><?= $no++; ?></td>
      <td><?= $row['nama_lengkap']; ?></td>
      <td><?= $row['username']; ?></td>
      <td><?= $row['password']; ?></td>
      <td><?= $row['role']; ?></td>
      <td>
  <?= ($row['is_active'] == '1') ? '<span class="badge badge-success">Aktif</span>' : '<span class="badge badge-danger">Tidak Aktif</span>'; ?>
</td>
      <td>
        <a href="<?= base_url; ?>/user/edit/<?= $row['id_user'] ?>" class="badge badge-info">Edit</a>
        <a href="<?= base_url; ?>/user/hapus/<?= $row['id_user'] ?>" class="badge badge-danger" onclick="return confirm('Hapus data?');">Hapus</a>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
        </table>
      </div>
    </div>
  </section>
</div>