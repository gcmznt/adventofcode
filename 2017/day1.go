package main

import (
	"fmt"
	"io/ioutil"
	"log"
)

func getInput() (content []byte) {
	content, err := ioutil.ReadFile("day1.input.txt")
	if err != nil {
		log.Fatal(err)
	}
	return
}

func main() {
	fmt.Printf("File contents: %s", getInput())
}
