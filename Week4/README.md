## Latihan kumpul disini

# Backend Package

Pada bagian ini dijelaskan bagaimana membangun otorisasi pada backend, beberapa langkah yang dilakukan :

- Membuat database backend
- Membuat function golang
- Membuat package golang dan merilisnya

Pastikan github pages sudah jalan di repo masing-masing.

## Basis data

Dalam memilih basis data skala enterprise harus mengacu pada hasil survey [Gartner](https://www.gartner.com/reviews/market/cloud-database-management-systems).Buatlah masing-masing basis data dari studi kasus yang dipilih :
- [MongoDB](https://www.mongodb.com/)
- MySQL : https://www.freemysqlhosting.net/, https://www.db4free.net/, https://remotemysql.com/


- Jika belum punya akun silahkan buat akun menggunakan akun Github (sign in)
  ![image](https://user-images.githubusercontent.com/26703717/224049906-a344f8b7-94eb-474c-bc2e-dae0b970eaf8.png)
  ![image](https://user-images.githubusercontent.com/15622730/223630677-23c059d9-0236-4cc3-9d35-14e5724003ee.png)
  ![image](https://user-images.githubusercontent.com/15622730/223630763-a1fc6f61-61e4-4f2d-be1a-72212ce3420d.png)

  Pada saat deploy
  Pilih Free Plan, Provider pilih Google Cloud, Region Pilih Jakarta, Nama Cluster sesuaikan saja, kemudian Create
  ![image](https://user-images.githubusercontent.com/26703717/224051590-07cbbd19-fa37-4171-9cf5-1cba2bd19f86.png)
  Pada security quickstart silahkan pilih username dan password (Jangan lupa untuk save password di notepad kalian), kemudian create user
  ![image](https://user-images.githubusercontent.com/26703717/224052500-44ccccaa-56df-4d5d-9dd1-e55c140cf2cc.png)

  Untuk Tahap 2, klik Add Current My IP Address
  ![image](https://user-images.githubusercontent.com/26703717/224052768-d8e5fb7b-cde2-4b3e-bfff-5f013fed3e78.png)
  Jika sudah klik Finish and Close
  ![image](https://user-images.githubusercontent.com/26703717/224053067-fd1af33f-fb91-49f2-b167-2e453c86cd2f.png)
  ![image](https://user-images.githubusercontent.com/15622730/223631673-e509a334-363c-4d51-a287-4a8531d023f9.png)

  Jika belum punya MongoDB Compass, silahkan download terlebih dahulu
  ![image](https://user-images.githubusercontent.com/26703717/224069777-635bc2e4-fc18-475f-93fc-164c7f5e7abe.png)

  Buka Mongo DB Compas, Kemudian Add New Connection, copy paste connection string pada gambar di atas, ganti Passwordnya dengan yang tadi sudah disimpan dan hapus kurung sikunya
  ![image](https://user-images.githubusercontent.com/26703717/224053890-a3c043b4-2e71-43aa-a5ee-446ef7629a56.png)
  Hasilnya seperti ini
  ![image](https://user-images.githubusercontent.com/26703717/224055259-6cd2878c-b427-4ee5-8335-a88e39aea9eb.png)
  Struktur tabel/collection di MongoDB terlihat seperti JSON
  ![image](https://user-images.githubusercontent.com/26703717/224055791-0bb78b63-e56b-416b-bdef-0dd48685f346.png)
  Pada mongodb.com untuk dapat diakses pada semua IP Address, klik ALLOW ACCESS FROM ANYWHERE atau dengan menuliskan 0.0.0.0/0
  ![image](https://user-images.githubusercontent.com/11188109/223330948-06b8493d-a9b7-4f19-86ba-06c35d6aaa96.png)


## Pengembangan Backend

Pada sesi ini pastikan anda sudah mendaftarkan diri ke heroku. Kemudian kita akan mencoba mengembangkan package golang. Langkah untuk membuat backend di golang :

- Instalasi golang (https://go.dev/dl/)
- Definisikan dahulu struct
- Buatlah package dan fungsi menggunakan struct tersebut
- Fungsi mengakses langsung database

### Struct di golang

Komunikasi di golang menggunakan json dipermudah dengan adanya struct type. Struct type ini akan mendefinisikan bagaimana bentuk json yang berkomunikasi dari frontend menuju backend. Sebelumnya inisiasi dulu package yang akan kita buat, masuk ke folder kerja kita dan lakukan inisialisasi package

```sh
go mod init github.com/{username github kalian}/WS/Chapter04/Site/{NPM masing-masing}
```
![image](https://user-images.githubusercontent.com/26703717/224059826-1497e750-265e-4442-9db7-123e30301736.png)

Buat file type.go pada folder tersebut. Kemudian isilah dengan struct yang akan kita buat. Perlu digaris bawahi dan wajib ada atribut :

- bson : mendefinisikan nama field pada collection di database mongoDB
- json : mendefinisikan nama atribut pada pertukaran json melalui API
- omitempty : diperbolehkan tidak diisi / nullable
- [] menunjukan data array didalam array

```go
package namapackage

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Karyawan struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama         string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Jabatan      string             `bson:"jabatan,omitempty" json:"jabatan,omitempty"`
	Jam_kerja    []JamKerja         `bson:"jam_kerja,omitempty" json:"jam_kerja,omitempty"`
	Hari_kerja   []string           `bson:"hari_kerja,omitempty" json:"hari_kerja,omitempty"`
}

type JamKerja struct {
	Durasi     int      `bson:"durasi,omitempty" json:"durasi,omitempty"`
	Jam_masuk  string   `bson:"jam_masuk,omitempty" json:"jam_masuk,omitempty"`
	Jam_keluar string   `bson:"jam_keluar,omitempty" json:"jam_keluar,omitempty"`
	Gmt        int      `bson:"gmt,omitempty" json:"gmt,omitempty"`
	Hari       []string `bson:"hari,omitempty" json:"hari,omitempty"`
	Shift      int      `bson:"shift,omitempty" json:"shift,omitempty"`
	Piket_tim  string   `bson:"piket_tim,omitempty" json:"piket_tim,omitempty"`
}

type Presensi struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Longitude    float64            `bson:"longitude,omitempty" json:"longitude,omitempty"`
	Latitude     float64            `bson:"latitude,omitempty" json:"latitude,omitempty"`
	Location     string             `bson:"location,omitempty" json:"location,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Datetime     primitive.DateTime `bson:"datetime,omitempty" json:"datetime,omitempty"`
	Checkin      string             `bson:"checkin,omitempty" json:"checkin,omitempty"`
	Biodata      Karyawan           `bson:"biodata,omitempty" json:"biodata,omitempty"`
}

type Lokasi struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama     string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Batas    Geometry           `bson:"batas,omitempty" json:"batas,omitempty"`
	Kategori string             `bson:"kategori,omitempty" json:"kategori,omitempty"`
}

type Geometry struct {
	Type        string      `json:"type" bson:"type"`
	Coordinates interface{} `json:"coordinates" bson:"coordinates"`
}

```

Kompilasi dependensi dengan perintah

```sh
go mod tidy
```
![image](https://user-images.githubusercontent.com/26703717/224061407-e8f394d0-6590-4b7f-81ba-b0eec08f9cc9.png)

### Fungsi di golang

Edit Environtments Variables pada Windows
Buka MongoDB Compass, kemudian pilih copy connection string
![image](https://user-images.githubusercontent.com/26703717/224064475-0f124e7b-a817-4058-85c8-ef34e3bff53e.png)
Paste pada environments variables, kemudian simpan
![image](https://user-images.githubusercontent.com/26703717/224064873-4cc79cf3-c675-42a8-8f36-1bb9daf331dc.png)
Jika sudah, close text editor (misal VSCode), kemudian buka lagi VSCodenya

Disini dipelajari bagaimana membuat fungsi dan menggunakan environment variabel di golang. Pertama simpan dahulu MONGOSTRING koneksi mongodb di environtment variabel windows atau sistem operasi.
Buat file {nama file}.go yang berisi

```go
package namapackage

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var MongoString string = os.Getenv("MONGOSTRING")

func MongoConnect(dbname string) (db *mongo.Database) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(MongoString))
	if err != nil {
		fmt.Printf("MongoConnect: %v\n", err)
	}
	return client.Database(dbname)
}

func InsertOneDoc(db string, collection string, doc interface{}) (insertedID interface{}) {
	insertResult, err := MongoConnect(db).Collection(collection).InsertOne(context.TODO(), doc)
	if err != nil {
		fmt.Printf("InsertOneDoc: %v\n", err)
	}
	return insertResult.InsertedID
}

func InsertPresensi(long float64,lat float64, lokasi string, phonenumber string, checkin string, biodata Karyawan) (InsertedID interface{}) {
	var presensi Presensi
	presensi.Latitude = long
	presensi.Longitude = lat
	presensi.Location = lokasi
	presensi.Phone_number = phonenumber
	presensi.Datetime = primitive.NewDateTimeFromTime(time.Now().UTC())
	presensi.Checkin = checkin
	presensi.Biodata = biodata
	return InsertOneDoc("tes_db", "presensi", presensi)
}

func GetKaryawanFromPhoneNumber(phone_number string) (staf Presensi) {
	karyawan := MongoConnect("tes_db").Collection("presensi")
	filter := bson.M{"phone_number": phone_number}
	err := karyawan.FindOne(context.TODO(), filter).Decode(&staf)
	if err != nil {
		fmt.Printf("getKaryawanFromPhoneNumber: %v\n", err)
	}
	return staf
}

```

rapihkan dependensi

```sh
go mod tidy
```
![image](https://user-images.githubusercontent.com/26703717/224062056-53fe9b41-07c8-40f5-92b7-22f3495d6d1f.png)

### Testing Fungsi

Buat file dengan format {namafile}_testing.go
```go
package namapackage

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "Rumah"
	phonenumber := "68122221814"
	checkin := "masuk"
	biodata := Karyawan{
		Nama : "Drake",
		Phone_number : "628456456211",
		Jabatan : "Rakyat Biasa",
	}
	hasil:=InsertPresensi(long ,lat , lokasi , phonenumber , checkin , biodata )
	fmt.Println(hasil)
}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "68122221814"
	biodata:=GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}


```

Jalankan testing

```sh
go test
```
Berhasil create dan view
![image](https://user-images.githubusercontent.com/26703717/224065373-2589a146-79e0-4525-9e59-01ee3de1209b.png)

Untuk melihat hasil test pada MongoDB Compass
![image](https://user-images.githubusercontent.com/26703717/224066007-942e3cb5-ecd0-4d9f-a077-dc6d1e26405d.png)

Untuk menjalankan run test per fungsi bisa menggunakan perintah

```sh
go test -run ^NAMAFUNCTION$
```

### Publish Package

Setting dahulu environtment variabel di windows :
GOPROXY=proxy.golang.org
![image](https://user-images.githubusercontent.com/15622730/223696410-11ffa42a-225e-4d50-a30e-97d1894407d9.png)


lakukan langkah berikut :

```sh
git tag
git tag v0.0.1
git push origin --tags
go list -m github.com/indrariksa/ws@v0.0.1
```
![image](https://user-images.githubusercontent.com/26703717/224067365-a49bf33b-b0a8-4b54-a3ef-44970adaa7da.png)
![image](https://user-images.githubusercontent.com/26703717/224067762-89dcb21e-a9a7-4453-91eb-a83e319be717.png)