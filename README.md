# SNAP Plugin Boilerplate

## How to install

```
cd <snap_directory>
npm install https://github.com/Bornholm/snap-plugin-boilerplate.git
echo >> config/"`hostname`.yaml" <<EOF
plugins:
  - path: 'snap-plugin-boilerplate'
    options:
      dummyFlag: True
EOF
```