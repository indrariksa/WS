package namapackage

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "Rumah"
	phonenumber := "685754189853"
	checkin := "masuk"
	biodata := Karyawan{
		Nama:         "Aufea",
		Phone_number: "6284123094832",
		Jabatan:      "Bukan Wakil Rakyat",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)
}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "685754189853"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
