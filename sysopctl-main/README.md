# sysopctl

`sysopctl` is a custom command-line tool designed for managing system resources and tasks on Linux systems. This tool provides various functionalities such as managing services, monitoring system processes, and backing up files.

## Features

### **1. Manual Page and Help**

Provides detailed documentation for `sysopctl`.

**Command:**
```bash
./sysopctl --man
./sysopctl --help
```

**Description:** Displays usage and examples of the `sysopctl` command.

![Manual Page](Screenshots/1.png)
![Manual Page](Screenshots/2.png)

* * *

### **2\. Version Information**

Shows the version of the `sysopctl` command.

**Command:**

```bash
./sysopctl --version
```

**Description:** Displays the current version of `sysopctl`.

![Version Information](Screenshots/3.png)

* * *

### **3\. List Running Services**

Lists all active services on the system.

**Command:**

```bash
./sysopctl service list
```

**Description:** Displays a list of all active services, similar to `systemctl list-units --type=service`.

![List Running Services](Screenshots/4.png)

* * *

### **4\. View System Load**

Shows the current system load averages.

**Command:**

```bash
./sysopctl system load
```

**Description:** Displays the system load averages, akin to the output from the `uptime` command.

![System Load](Screenshots/5.png)

* * *

### **5\. Manage System Services**

#### **Start a Service**

Starts a specified service.

**Command:**

```bash
./sysopctl service start <service-name>
```

**Description:** Starts the given service. Replace `<service-name>` with the actual service name.

![Start Service](Screenshots/6.png)

#### **Stop a Service**

Stops a specified service.

**Command:**

```bash
./sysopctl service stop <service-name>
```

**Description:** Stops the given service. Replace `<service-name>` with the actual service name.

![Stop Service](Screenshots/6.png)

* * *

### **6\. Check Disk Usage**

Displays disk usage statistics by partition.

**Command:**

```bash
./sysopctl disk usage
```

**Description:** Shows disk usage statistics similar to `df -h`.

![Disk Usage](Screenshots/7.png)

* * *

### **7\. Monitor System Processes**

Displays real-time process activity.

**Command:**

```bash
./sysopctl process monitor
```

**Description:** Shows real-time process activity, similar to `top` or `htop`.

![Monitor Processes](Screenshots/8.png)

* * *

### **8\. Analyze System Logs**

Summarizes recent critical log entries.

**Command:**

```bash
./sysopctl logs analyze
```

**Description:** Analyzes recent critical log entries using `journalctl`.

![Analyze Logs](Screenshots/9.png)

* * *

### **9\. Backup System Files**

Backs up specified files or directories.

**Command:**

```bash
./sysopctl backup <path>
```

**Description:** Initiates a backup of the specified path. Replace `<path>` with the path to the files or directories you want to back up.

![Backup Files](Screenshots/10.png)

* * *

Contributing
------------

If you’d like to contribute to this project, please fork the repository and submit a pull request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
