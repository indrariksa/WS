# Kuliah Web Service
Materi Kuliah Web Service, akses github pages : https://indrariksa.github.io/WS/

## URL Cek Tugas (untuk NPM bisa diubah dengan NPM masing-masing)
1. https://indrariksa.github.io/WS/Week2/Site/NPM/
2. https://indrariksa.github.io/WS/Week2/Tugas/NPM/

## Pelakor
Pelaku ubah atau delete file orang :
|No.| NPM      | Nama | Commit |
| ------ | ------ | ------ | ------ |
|1.| 1214023 | Rizkyria Angelina Pandapotan Hutabarat	 | https://github.com/indrariksa/WS/commit/af8d2ce101647d1b9cd9b16c2f754b3b119aef92#diff-b984f92ea833b9b4302a76e7d131246cc1fa9f6dfd6701cbae06a1458c060dbd |

# Pengenalan Tools
Disini akan menggunakan tools Git Bash

# git scm
Download git-scm dari https://git-scm.com/downloads

## Get SSH Key 
to get ssh key in your computer, and put in your github or gitlab ssh key setting.

```sh
cat ~/.ssh/id_rsa.pub
```
if there is no key appears, plese generate the key also set global config of git in next section and please add the public key to your github profile.

## Generate RSA Key
Just One time for first instalation of git scm.
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## Set config global
Just One time for first instalation of git scm.

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```



