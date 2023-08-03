curl localhost:/static.hyml
curl localhost:80/static.hyml
curl localhost:80/hello
curl localhost:80/other
curl localhost:80/static.html
sudo systemctl stop nginx 
sudo systemctl status nginx 
cat /etc/system-release
python -V
python3 -V
pip --version
yum info python3
amazon-linux-extras list | grep python
which python3
which update-alternatives
sudo update-alternatives --config python3
sudo apt install python3.10
wget https://www.python.org/ftp/python/3.10.3/Python-3.10.3.tgz
tar -xf Python-3.10.*.tgz
cd Python-3.10.*/
make -j $(nproc)
python3.10 --version
sudo make altinstall
cd ../
openssl version
yum search python3
sudo yum install python3.11
python3 -V
python -V
which python3
which python3.11
ls /usr/bin/
ls /usr/bin/python
ls /usr/bin/ | grep python
sudo update-alternatives --config python
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.9 1
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.11 1
sudo update-alternatives --config python
python -V
pip -V
pip3 -V
sudo apt install python3-pip
yum install python-pip
sudo install python-pip
sudo yum install python-pip
pip -V
sudo yum install python3.11-pip
pip -V
which pip
ls /usr/bin/ | grep pip
sudo update-alternatives --config pip
sudo update-alternatives --install /usr/bin/pip pip /usr/bin/pip3.9 1
sudo update-alternatives --install /usr/bin/pip pip /usr/bin/pip3.11 2
sudo update-alternatives --config pip
pip -V
ls /usr/lib/
ls /usr/lib/python3.11/
ls /usr/lib/python3.11/site-packages
py --list
python -V
pip -V
sudo update-alternatives --config pip
sudo update-alternatives --install /usr/lib/python3.9/site-packages/pip pip 3
pip -V
sudo update-alternatives --config pip
which pip
python -m pip install gunicorn
sudo yum install nginx
sudo systemctl start nginx
sudo systemctl status nginx
python -m pip install flask
pip --list
pip list
touch flask_app.py
sudo sh -c 'echo "This page is static" > /usr/share/nginx/html/static.html'
sudo vim /etc/nginx/conf.d/proxy.conf
sudo systemctl restart nginx
gunicorn flask_app:app
curl localhost:80
curl localhost:80/hello
sudo vim /etc/nginx/conf.d/proxy.conf
curl localhost:80/chat
sudo systemctl stop nginx
ls
gunicorn main:app
sudo systemctl start nginx
sudo vim /etc/nginx/conf.d/proxy.conf
sudo systemctl restart nginx 
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl start nginx
