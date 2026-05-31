package main
import "os/exec"
// CANARY-9: confirm routing determinism
func run(cmd string) { exec.Command("sh","-c",cmd).Run() } // command injection
